// collect.js
const fetch = require('node-fetch'); // باش نستعمل API
const { MongoClient } = require('mongodb');

// هاد المتغيرات غادي نديروهم كـ Environment Variables فـ Netlify
const MONGO_URI = process.env.MONGO_URI;  
const MONGO_DB = process.env.MONGO_DB;

let cachedClient = null;

// باش نتجنب الاتصال كل مرة
async function getMongoClient() {
    if (cachedClient && cachedClient.isConnected && cachedClient.isConnected()) return cachedClient;
    const client = new MongoClient(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    cachedClient = client;
    return client;
}

exports.handler = async function(event, context) {
    try {
        const headers = event.headers || {};
        const ip = headers['x-nf-client-connection-ip'] || headers['x-forwarded-for']?.split(',')[0] || 'unknown';

        // API باش نجيب المدينة والبلد
        const geoRes = await fetch(`https://ipapi.co/${ip}/json/`);
        const geo = await geoRes.json();

        const doc = {
            ip,
            city: geo.city || geo.region || null,
            country: geo.country_name || geo.country || null,
            date: new Date(),
            page: JSON.parse(event.body || '{}').page || null
        };

        const client = await getMongoClient();
        const db = client.db(MONGO_DB);
        const col = db.collection('visitors');
        await col.insertOne(doc);

        return { statusCode: 200, body: JSON.stringify({ success: true, visitor: doc }) };
    } catch (err) {
        console.error(err);
        return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
    }
};

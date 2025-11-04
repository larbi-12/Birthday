
        let btn = document.getElementById('btn');
        let boxCard = document.getElementById('birthdayCard');
        let audio = document.getElementById("myAudio");

        // تشغيل الموسيقى تلقائياً
        // window.addEventListener("load", function () {
        //     audio.muted = false;
        //     audio.play().catch((e) => {
        //         console.log("Autoplay bloqué par navigateur:", e);
        //     });

        //     audio.addEventListener('ended', function() {
        //         audio.currentTime = 0;
        //         audio.play();
        //     });
        // });

        // عرض/إخفاء بطاقة عيد الميلاد
        btn.onclick = function () {
            if (boxCard.classList.contains('hide')) {
                boxCard.classList.remove('hide');
                boxCard.classList.add('show');
                btn.textContent = 'Fermer';
                createConfetti();
            } else {
                boxCard.classList.remove('show');
                boxCard.classList.add('hide');
                btn.textContent = 'Cliquer ici';
            }
        }

        // إنشاء تأثير الكونفيتي
        function createConfetti() {
            const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
            const confettiCount = 1000;
            
            for (let i = 0; i < confettiCount; i++) {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = Math.random() * 100 + 'vw';
                
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.width = Math.random() * 10 + 5 + 'px';
                confetti.style.height = Math.random() * 10 + 5 + 'px';
                confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
                confetti.style.animationDelay = Math.random() * 2 + 's';
                
                document.body.appendChild(confetti);
                
                // إزالة الكونفيتي بعد انتهاء الرسوم المتحركة
                setTimeout(() => {
                    confetti.remove();
                }, 10000);
            }
        }















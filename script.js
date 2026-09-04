// =========================
// SELEÇÃO DE ELEMENTOS
// =========================

const header = document.querySelector("header");
const sections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll("header nav a");


// =========================
// HEADER AO ROLAR A PÁGINA
// =========================

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("header-scroll");

    } else {

        header.classList.remove("header-scroll");

    }

});


// =========================
// MENU ATIVO CONFORME
// A SEÇÃO DA PÁGINA
// =========================

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop;

        const sectionHeight = section.clientHeight;

        if (
            window.scrollY >=
            sectionTop - sectionHeight / 3
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


// =========================
// ANIMAÇÃO AO APARECER
// NA TELA
// =========================

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);


// ELEMENTOS QUE SERÃO ANIMADOS

const animatedElements = document.querySelectorAll(

    "section h2, section p, article, details"

);


animatedElements.forEach((element) => {

    element.classList.add("hidden");

    observer.observe(element);

});


// =========================
// FAQ
// FECHA OS OUTROS AO ABRIR
// =========================

const faqItems = document.querySelectorAll(
    "#faq details"
);


faqItems.forEach((item) => {

    item.addEventListener("toggle", () => {

        if (item.open) {

            faqItems.forEach((otherItem) => {

                if (
                    otherItem !== item
                ) {

                    otherItem.removeAttribute("open");

                }

            });

        }

    });

});


// =========================
// BOTÃO FLUTUANTE
// WHATSAPP
// =========================

const whatsappButton = document.createElement("a");


// IMPORTANTE:
// TROQUE O NÚMERO PELO
// WHATSAPP DA KAMILA

whatsappButton.href =
    "https://wa.me/554384114958";


whatsappButton.target = "_blank";


whatsappButton.classList.add(
    "whatsapp-float"
);


whatsappButton.innerHTML = "💬";


document.body.appendChild(
    whatsappButton
);


// =========================
// MENSAGEM AUTOMÁTICA
// WHATSAPP
// =========================

const whatsappLinks = document.querySelectorAll(

    'a[href*="wa.me"]'

);


whatsappLinks.forEach((link) => {

    link.addEventListener("click", () => {

        const message =
            "Olá, Kamila! Vi seu site e gostaria de fazer um orçamento para uma tatuagem.";

        const phone =
            "554384114958";


        link.href =
            `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    });

});


// =========================
// SCROLL SUAVE EXTRA
// =========================

document.querySelectorAll(
    'a[href^="#"]'
).forEach((anchor) => {

    anchor.addEventListener(
        "click",

        function (event) {

            event.preventDefault();


            const target =
                document.querySelector(
                    this.getAttribute("href")
                );


            if (target) {

                target.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            }

        }

    );

});
const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = "block") => {
    const header = document.querySelector(headerSelector);
    const tab = document.querySelectorAll(tabSelector);
    const content = document.querySelectorAll(contentSelector);

    function hideTabContent() {
        content.forEach(a => {
            a.style.display = "none";
        });

        tab.forEach(a => {
            a.classList.remove(activeClass);
        });
    }

    function showTabContent(i = 0) {
        content[i].style.display = display;
        tab[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    header.addEventListener("click", (e) => {
        const target = e.target;

        if (target && (target.classList.contains(tabSelector.replace(/\./, "")) || target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
            tab.forEach((a, i) => {
                if (target === a || target.parentNode === a) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
};

export default tabs;
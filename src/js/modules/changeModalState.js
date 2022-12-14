import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll(".balcon_icons_img");
    const windowWidth = document.querySelectorAll("#width");
    const windowHeight = document.querySelectorAll("#height");
    const windowType = document.querySelectorAll("#view_type");
    const windowProfile = document.querySelectorAll(".checkbox");

    checkNumInputs("#width");
    checkNumInputs("#height");

    function bindActionToElems(event, elem, prop) {
        elem.forEach((a, i) => {
            a.addEventListener(event, () => {
                switch(a.nodeName) {
                    case "SPAN":
                        state[prop] = i;
                        break;
                    case "INPUT":
                        if (a.getAttribure("type") === "checkbox") {
                            i === 0 ? state[prop] = "Cold" : state[prop] = "Hot";
                            elem.forEach((a, j) => {
                                a.checked = false;
                                if (i === j) {
                                    a.checked = true;
                                }
                            });
                        } else {
                            state[prop] = a.value;
                        }
                        break;
                    case "SELECT":
                        state[prop] = a.value;
                        break;
                }
            });
        });
    }

    bindActionToElems("click", windowForm, "form");
    bindActionToElems("input", windowHeight, "height");
    bindActionToElems("input", windowWidth, "width");
    bindActionToElems("change", windowType, "type");
    bindActionToElems("change", windowProfile, "profile");
};

export default changeModalState;
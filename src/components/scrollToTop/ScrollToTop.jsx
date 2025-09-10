import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname, hash } = useLocation();
    const navType = useNavigationType(); // PUSH / REPLACE / POP

    useEffect(() => {
        // Хэш-якорь: скроллим к элементу (с запасом — если элемент появится после рендера)
        if (hash) {
            const jump = () => {
                const el = document.querySelector(hash);
                if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            };
            requestAnimationFrame(jump);
            setTimeout(jump, 60);
            return;
        }

        // Обычный переход: наверх (кроме назад/вперёд — POP)
        if (navType !== "POP") {
            window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        }
    }, [pathname, hash, navType]);

    return null;
}
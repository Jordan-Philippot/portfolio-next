import {useEffect, useRef} from "react";

export default function Cursor() {
    const delay = 18;

    const dot = useRef<HTMLDivElement | null>(null);
    const dotOutline = useRef<HTMLDivElement | null>(null);

    const endX = useRef<number>(typeof window !== "undefined" ? window.innerWidth / 2 : 0);
    const endY = useRef<number>(typeof window !== "undefined" ? window.innerHeight / 2 : 0);

    const _x = useRef<number>(0);
    const _y = useRef<number>(0);

    const requestRef = useRef<number | null>(null);

    const mouseMoveEvent = (e: MouseEvent): void => {
        endX.current = e.pageX;
        endY.current = e.pageY;

        if (dot.current) {
            dot.current.style.top = `${endY.current}px`;
            dot.current.style.left = `${endX.current}px`;
        }
    };

    const animateDotOutline = (): void => {
        _x.current += (endX.current - _x.current) / delay;
        _y.current += (endY.current - _y.current) / delay;

        if (dotOutline.current) {
            dotOutline.current.style.top = `${_y.current}px`;
            dotOutline.current.style.left = `${_x.current}px`;
        }

        requestRef.current = requestAnimationFrame(animateDotOutline);
    };

    useEffect(() => {
        document.addEventListener("mousemove", mouseMoveEvent);

        animateDotOutline();

        return () => {
            document.removeEventListener("mousemove", mouseMoveEvent);

            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
        };
    }, []);

    return (
        <>
            <div ref={dotOutline} className="cursor-dot-outline"></div>
            <div ref={dot} className="cursor-dot"></div>
        </>
    );
}

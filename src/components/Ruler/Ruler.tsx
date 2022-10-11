import React, {FC, useEffect, useState} from 'react';
import styles from './Ruler.module.scss';
import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai";
import useMousePosition from "../../snippets/Snippets";

interface points {
    x: number,
    y: number,
}

const Ruler: FC = () => {
    const [rulerPoint1, setRulerPoint1] = useState<boolean>(false);
    const [rulerPoint2, setRulerPoint2] = useState<boolean>(false);
    const [from, setFrom] = useState<points>({x: 0, y: 0});
    const [to, setTo] = useState<points>({x: 0, y: 0});

    const angle = Math.atan((to.y - from.y) / (to.x - from.x));
    const len = Math.sqrt(Math.pow(from.x - to.x, 2) + Math.pow(from.y - to.y, 2));

    const [length, setLength] = useState(len);


    let {x, y} = useMousePosition();

    y -= 95
    if (window.innerWidth === 1920) {
        x -= 450
    } else if (window.innerWidth === 1536) {
        x -= 266
    } else if (window.innerWidth === 1280) {
        x -= 130
    }

    const setPoint = ({x, y}: points) => {
        if (!rulerPoint1 || !rulerPoint2) {
            if (x >= from.x) {
                if (rulerPoint1) {
                    setTo({x,y});
                    setRulerPoint2(true);
                } else {
                    setFrom({x, y});
                    setRulerPoint1(true);
                }
            } else if (x <= from.x) {
                if (rulerPoint2) {
                    setFrom({x, y});
                    setRulerPoint1(true);
                }
            }

        }
    }


    useEffect(() => {
        if (rulerPoint1 && !rulerPoint2) {
            if (x >= from.x) {
                setTo({x, y});
            } else if (x <= from.x) {
                setTo(from);
                setRulerPoint2(true);
                setRulerPoint1(false);
            }
        } else if (rulerPoint2 && !rulerPoint1) {
            if (x <= to.x) {
                setFrom({x, y});
            } else if (x >= to.x) {
                setFrom(to);
                setRulerPoint1(true);
                setRulerPoint2(false);
            }
        }

    }, [x, y]);


    useEffect(() => {
        setLength(Math.floor(len))
    }, [len])

    return (
        <div className={`${styles.wrapper}`}
             onClick={() => setPoint({x, y})}>
            <div style={{
                position: 'absolute',
                transform: `translate(${from.x - .5 * len * (1 - Math.cos(angle))}px, ${from.y + .5 * len * Math.sin(angle)}px) rotate(${angle}rad)`,
                width: `${length}px`,
                height: `${2}px`,
                borderBottom: '2px solid white',
                display: 'grid'
            }}>
                <div className={styles.left}>
                    <AiOutlineLeft/>
                </div>
                <div className={styles.cm}>
                    {(length * 0.0264583333).toFixed(1)}cm
                </div>
                <div className={styles.right}>
                    <AiOutlineRight/>
                </div>
            </div>
        </div>
    )
};

export default Ruler;
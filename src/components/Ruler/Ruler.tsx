import React, {FC, useState} from 'react';
import styles from './Ruler.module.scss';
import ResizableRect from 'react-resizable-rotatable-draggable'
import './Ruler.scss'

const Ruler: FC = () => {
    const [rotateAngle, setRotateAngle] = useState<number>(0);
    const [left, setLeft] = useState<number>(200);
    const [top, setTop] = useState<number>(200);
    const [width, setWidth] = useState<number>(100);
    const [height, setHeight] = useState<number>(4);


    const handleRotate = (rotateAngle: number) => {
        setRotateAngle(rotateAngle);
    }

    const handleDrag = (deltaX: number, deltaY: number) => {
        setLeft(left + deltaX);
        setTop(top + deltaY);
    }

    const handleResize = (style: any, isShiftKey: any, type: any) => {
        let {top, left, width, height} = style
        top = Math.round(top)
        left = Math.round(left)
        width = Math.round(width)
        height = Math.round(height)
        setWidth(width);
        setTop(top)
        setLeft(left);
        setHeight(height);
    }


    return (
        <div className={styles.wrapper}>
            <ResizableRect rotatable={true}
                           left={left}
                           top={top}
                           width={width}
                           rotateAngle={rotateAngle}
                           height={height}
                           zoomable='w, e'
                           onDrag={handleDrag}
                           onResize={handleResize}
                           onRotate={handleRotate}>
            </ResizableRect>
            <div style={
                {
                    position: 'absolute',
                    top: top,
                    left: left,
                    color: '#fff',
                    fontSize: 25,
                }
            }>
                {(width * 0.0264583333).toFixed(1)}cm
            </div>
        </div>
    )
};

export default Ruler;
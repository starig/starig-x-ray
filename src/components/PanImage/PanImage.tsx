import React, { Component } from "react";
import styles from './PanImage.module.scss';

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

type PanProps = {
    imgSrc: string;
    brightness: string;
    contrast: string;
    invert: string;
}

class PanImage extends Component<PanProps> {
    render() {
        return (
            <TransformWrapper
                initialScale={1}
                initialPositionX={0}
                initialPositionY={0}
            >
                {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                    <React.Fragment>
                        <div className={styles.buttonsWrapper}>
                            <div className={styles.buttons}>
                                <div onClick={() => zoomOut()} className={`${styles.buttonsItem} ${styles.minus}`}>
                                    -
                                </div>
                                <div onClick={() => zoomIn()} className={`${styles.buttonsItem} ${styles.plus}`}>
                                    +
                                </div>
                            </div>
                        </div>
                        <TransformComponent contentStyle={{cursor: 'move'}}>
                            <img src={this.props.imgSrc}
                                 style={{
                                     maxWidth: '100%',
                                     filter: `contrast(${this.props.contrast}%) 
                                                                             brightness(${this.props.brightness}%) 
                                                                             invert(${this.props.invert})`
                                 }}
                                 className={styles.image}
                                 alt="test" />
                        </TransformComponent>
                    </React.Fragment>
                )}
            </TransformWrapper>
        );
    }
}

export default PanImage
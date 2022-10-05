import * as React from 'react';
import PanViewer from './PanViewer';
import styles from './ArrowMenu.module.scss';
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";


type ReactPanZoomProps = {
    image: string;
    alt?: string;
    ref?: any;
};

const ReactPanZoom = ({image, alt, ref}: ReactPanZoomProps) => {
    const [dx, setDx] = React.useState(0);
    const [dy, setDy] = React.useState(0);
    const [zoom, setZoom] = React.useState(1);

    const {
        contrastValue,
        brightnessValue,
        invertValue
    } = useSelector((state: RootState) => state.photo);

    const zoomIn = () => {
        setZoom(zoom + 0.2);
    };

    const zoomOut = () => {
        if (zoom > 1) {
            setZoom(zoom - 0.2);
        }
    };

    const onPan = (dx: number, dy: number) => {
        console.log(dx)
        setDx(dx);
        setDy(dy);
    };


    return (
        <div className={styles.wrapper}>
            <div className={styles.buttonsWrapper}>
                <div className={styles.buttons}>
                    <div onClick={zoomOut}
                         className={`${styles.minus} ${styles.buttonsItem} ${zoom === 1 && styles.disabled}`}>
                        <svg
                            style={{
                                height: '100%',
                                width: '100%',
                                padding: 10,
                                boxSizing: 'border-box',
                            }}
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M4 12H20"
                                stroke="#fff"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>
                    <div onClick={zoomIn} className={`${styles.plus} ${styles.buttonsItem}`}>
                        <svg
                            style={{
                                height: '100%',
                                width: '100%',
                                padding: 10,
                                boxSizing: 'border-box',
                            }}
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M4 12H20"
                                stroke="#fff"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                            <path
                                d="M12 4L12 20"
                                stroke="#fff"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>
                </div>
            </div>
            <PanViewer
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 1,
                }}
                zoom={zoom}
                setZoom={setZoom}
                pandx={dx}
                pandy={dy}
                onPan={onPan}
                key={dx}
                brightnessValue={brightnessValue}
                contrastValue={contrastValue}
                invertValue={invertValue}
            >
                <img
                    style={{
                        width: '100%',
                    }}
                    src={image}
                    alt={alt}
                    ref={ref}
                />
            </PanViewer>
        </div>
    );
};

export {PanViewer};
export default ReactPanZoom;

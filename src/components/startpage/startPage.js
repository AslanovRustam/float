import s from "./startPage.module.css";
import { useState, useEffect } from "react";
import hedphones from "../../images/Headphone_JD.png";
import star from "../../images/star_big.png";
import camera from "../../images/camera.png";

const images = [
  { id: 1, path: hedphones },
  { id: 2, path: star },
  { id: 3, path: camera },
];

export default function StartPage() {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(100);
  const [imgState, setImg] = useState(images[0].path);
  const [loading, setLoading] = useState(true);

  function Load() {
    if (start >= end) {
      setStart(end);
      return;
    }
    setStart(start + 1);
  }
  function LoadImages() {
    while (loading) {
      if (imgState == images[0].path) {
        setImg(images[1].path);
        return;
      } else if (imgState == images[1].path) {
        setImg(images[2].path);
        return;
      } else if (imgState == images[2].path) {
        setImg(images[0].path);
        return;
      }
    }
  }
  setTimeout(Load, 10);
  setTimeout(LoadImages, 200);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4200);
  });
  return (
    <div className={s.startScreen}>
      <div className={s.counter}>{start}</div>
      <span className={s.loading}>loading...</span>
      <img className={s.img} src={imgState} alt="var"></img>
    </div>
  );
}

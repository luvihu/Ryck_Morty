import style from './about.module.css';
import img from '../../img/banner.gif';

export default function About() {

  return (
    <div className={style.datos}>
      <h2>My name is Lucy, this is my first project developed with React, Redux, Express and Sequelize.
        with React, Redux, Express and Sequelize; excited to be able to share this first achievement 
        this first achievement which is the starting point for other projects.
        ᕦ(ò_óˇ)ᕤ
      </h2>
      <img src={img} alt="img" />
            
    </div>
  );
}
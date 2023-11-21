import errorImg from '../../img/error404.jpg';
import { useParams , useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Error() {
  const { "*": path } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div>
      <img src={errorImg} alt='Error404' />
      <p>The path "{path}" is not a valid route.</p>
    </div>
  )
}
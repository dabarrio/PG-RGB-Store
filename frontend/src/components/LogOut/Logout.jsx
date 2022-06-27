import axios from "axios";
import { useContext, useState } from "react";
import { CartContext } from "../Cart/CartContext";
import { useDispatch } from "react-redux";


export default function Logout() {
  const [actualizar, setActualizar] = useState("");
  const {products} = useContext(CartContext); //CartContext estado global // products array con prodcucts con amount
  const dispatch = useDispatch();

  function onClick(e) {
    e.preventDefault();
    // dispatch(postCart(products))
    
    // axios.post("/rutaParaAgregarCarritoAUsuario", )

    axios({
      method: "post",
      url: "http://localhost:3001/logout",
      headers: { "X-Requested-With": "XMLHttpRequest" },
      withCredentials: true,
    })
      .then((res) => {
        if (res) {
          console.log(res.data, "-> respuesta del post de logout");
          // localStorage.removeItem("token");
          // localStorage.removeItem('userId');
          // localStorage.removeItem('name');
          // localStorage.removeItem('type');
          // localStorage.removeItem('avatar');
          localStorage.clear();
          setActualizar(" ");
          return (window.location = "http://localhost:3000/");
        }
      })
      .catch((error) => console.log(error));
  }

  return (
    <div>
      <button
        className="bg-primary-400 font-Open px-5 py-1 rounded-lg text-primary-200 uppercase font-semibold hover:bg-primary-300"
        onClick={(e) => onClick(e)}
      >
        Logout
      </button>
    </div>
  );
}

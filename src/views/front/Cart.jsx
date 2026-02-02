import axios from "axios";
import { useEffect, useState } from "react";
import { currency } from "../../utils/filter";

const API_BASE = import.meta.env.VITE_API_BASE;
const API_PATH = import.meta.env.VITE_API_PATH;

function Cart() {
  const [cart, setCart] = useState([]);

  //取得購物車資料
  const getCart = async() =>{
    try {
      const response = await axios.get(`${API_BASE}/api/${API_PATH}/cart`);
      //console.log(response.data.data);
      setCart(response.data.data);
    } catch (error) {
      alert(error.response.data.message);
    }
  }  
  useEffect(()=> {
  getCart();
  },[])
  //更新購物車內容
  const updateCart = async(cartId, productId, qty=1) => {
    try {
      //準備傳入cart api資料
      const data = {
        product_id: productId,
        qty
      }
      const response = await axios.put(`${API_BASE}/api/${API_PATH}/cart/${cartId}`, {data});
      //console.log(response.data);
      //修改後要更新小計跟總計價錢，需呼叫取得購物車的方法
      getCart();
    } catch (error) {
      alert(error.response.data.message);
    }
  }
  //刪除購物車
  const delCart = async(cartId) => {
    try {
      const response = await axios.delete(`${API_BASE}/api/${API_PATH}/cart/${cartId}`);
      alert(`商品${response.data.message}`);
      //修改後要更新小計跟總計價錢，需呼叫取得購物車的方法
      getCart();
    } catch (error) {
      alert(error.response.data.message);
    }
  }
  //清空購物車
  const delAllCart = async() => {
    try {
      const response = await axios.delete(`${API_BASE}/api/${API_PATH}/carts`);
      alert('已清空購物車');
      getCart();
    } catch (error) {
      alert(error.response.data.message);
    }
  }   

  return(
    <div className="container">
      <h2>購物車列表</h2>
      <div className="text-end mt-4 mb-4">
        <button type="button" className="btn btn-danger" onClick={()=>{delAllCart()}}>
          清空購物車
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">品名</th>
            <th scope="col">售價</th>
            <th scope="col">數量/單位</th>
            <th scope="col" className="text-end">小計</th>
          </tr>
        </thead>
        <tbody>
          {cart?.carts?.map((cartItem)=>{
            return (
              <tr key={cartItem.id}>
                <td>
                  <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => delCart(cartItem.id)}>
                    刪除
                  </button>
                </td>
                <th scope="row">
                  {cartItem.product.title}
                </th>
                <td>{cartItem.product.price}</td>
                <td>
                  <div className="input-group input-group-sm mb-3">
                    <input 
                      type="number"
                      className="form-control"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-sm"
                      defaultValue={cartItem.qty}
                      onChange={(e) => 
                        updateCart(cartItem.id, 
                        cartItem.product.id, 
                        Number(e.target.value)  //因input輸入為字串需轉換為數字
                        )
                      }
                    />
                    <span className="input-group-text" id="inputGroup-sizing-sm">{cartItem.product.unit}</span>
                  </div>                  
                </td>
                <td className="text-end">
                  {currency(cartItem.final_total)}
                </td>
              </tr>              
            )
          })}         
        </tbody>
        <tfoot>
          <tr>
            <td className="text-end" colSpan="4">
              總計
            </td>
            <td className="text-end">{currency(cart.final_total)}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}
export default Cart
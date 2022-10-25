import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { infoArr } from './InfoArr';

function InfoPage(): JSX.Element {
    const { id } = useParams();
    // const [count, setCount] = useState(Number(id));
    // console.log(count);
    
    // function handleClicPlus():void {
    //     if(count >= 5){
    //         setCount(1)
    //     }else if(count <= 0){
    //         setCount(5)
    //     }else{
    //         setCount((x:number) => x + 1);
    //     }
    // }
    // function handleClicMinus():void {
    //     if(count >= 5){
    //         setCount(1)
    //     }else if(count <= 1){
    //         setCount(5)
    //     }else{
    //         setCount((x:number) => x - 1);
    //     }
    // }
    const navigate = useNavigate();
    function navigatePage(way: string) {
        if(Number(way) >= 6){
            navigate(`/info/infopage/${1}`);
        }else if(Number(way) <= 0){
            navigate(`/info/infopage/${5}`);
        }else{
            navigate(`/info/infopage/${way}`);
        }
    }
    const oneItem = infoArr.filter((el) => el.id === Number(id));
    return (
        <div className="container">
            <div className="topCont">{oneItem[0].name}</div>
            <div className="botCont">{oneItem[0].bodyTwo}{oneItem[0].bodyOne}</div>
            <button onClick={()=> navigatePage(`${Number(id)-1}`)}>Предыдущая статья</button><button onClick={()=> navigatePage(`${Number(id) + 1}`)}>Следующая статья</button>
        </div>
    );
}

export default InfoPage;

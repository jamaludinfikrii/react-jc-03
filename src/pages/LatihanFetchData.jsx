import React from 'react'
import Axios from 'axios'

var linkApi = 'https://api.komputer-shop.com/products'


class LatihanFetchData extends React.Component{
    state= {
        data : null
    }

    onAmbilDataHandler = () => {
        Axios.get(linkApi)
        // ketika ambil data berhasil
        .then((res) => {
            console.log(res.data)
            this.setState({data : res.data})
            console.log('res')
            
        })

        // ketika ambil data gagal
        .catch((err) => {
            console.log('err')
            console.log(err)
        })
    }
    render(){
        if(this.state.data !== null){
            return(
                <div>
                    <h1>Data Udah Ke Ambil</h1>
                    {
                        this.state.data.map((val,index) =>{
                            return(
                               <div key={index}>
                                   <img width='50px' height='50px' src={val.gambar} alt='broken' />
                                   <p>{val.nama_produk}</p>
                                   <p style={{fontStyle:'italic'}}>{val.harga}</p>

                               </div>
                            )
                        })
                    }
                </div>
            )
        }
        return(
            <div>
                <h1>Latihan Ambil Data</h1>
                <input type="button" value="ambil data" onClick={this.onAmbilDataHandler}/>
            </div>
        )
    }
}

export default LatihanFetchData;
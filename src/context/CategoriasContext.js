import React, { Component } from 'react';
import axios from 'axios';

//Crear el context
const CategoriasContext = React.createContext();

export const CategoriasConsumer = CategoriasContext.Consumer;

class CategoriasProvider extends Component {

    token = 'LQMKGJVO5MMLZRWSSACY';
    
    state = { 
        categories : []
     }
    
    componentDidMount(){
        this.obtenerCategorias();
    }

    obtenerCategorias = async () => {
        
        let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`
        
        let categories = await axios.get(url);

        this.setState({
            categories : categories.data.categories
        })

    }
    
    render() { 
        return ( 
            <CategoriasContext.Provider
                value={{
                    categories : this.state.categories
                }}
            >
                {this.props.children}
            </CategoriasContext.Provider>
        );
    }
}
 
export default CategoriasProvider;
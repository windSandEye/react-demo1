
import React from 'react';

export default class HelloWorld extends React.Component{

    render(){
        const style = {color:"blue",fontSize:"24"};
        return (
            <div style={{style}}>
                hello world!<br/>
                this is my first demo！
            </div>
        )
    }
}
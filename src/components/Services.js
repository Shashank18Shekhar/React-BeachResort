import React, {Component} from 'react'
import Title from './Title'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'

export default class Services extends Component{
    state={
        services:[
            {
            icon:<FaCocktail />,
            title:"free cocktails",
            info:"Lermlefdjdklndjv dkdafjdm ckvjd dmjdvmds,dlkfww f jddjwfjckjfewffkfknf jfewfnkdkjf  jfjejfnelkd"
        },
        {
            icon:<FaHiking />,
            title:"Endless Hiking",
            info:"Lermlefdjdklndjv dkdafjdm ckvjd dmjdvmds,dlkfww f jddjwfjckjfewffkfknf jfewfnkdkjf  jfjejfnelkd"
        },
        {
            icon:<FaShuttleVan />,
            title:"Free shuttle",
            info:"Lermlefdjdklndjv dkdafjdm ckvjd dmjdvmds,dlkfww f jddjwfjckjfewffkfknf jfewfnkdkjf  jfjejfnelkd"
        },
        {
            icon:<FaBeer />,
            title:"Strongest Beer",
            info:"Lermlefdjdklndjv dkdafjdm ckvjd dmjdvmds,dlkfww f jddjwfjckjfewffkfknf jfewfnkdkjf  jfjejfnelkd"
        }
    ]
    }
    render(){
        return(
            <section className="services">
            <Title title='services '/>
            <div className="services-center">
                {this.state.services.map((item,index) =>{
               return<article key={index} className='service'>
                   <span>{item.icon}</span>
                   <h6>{item.title}</h6>
                   <p>{item.info}</p>
               </article>
                })}
            </div>
            </section> 
        )
    }
}
import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
               <header>
                  <img src="https://avatars3.githubusercontent.com/u/51250987?s=460&u=a7a7064c8c5d89c278ed206a986450972e8c0c34&v=4" alt="Vinicius Gandini"/>
                  <div>
                     <strong>Vinicius Gandini</strong>
                     <span>Química</span>
                  </div>
               </header>

               <p>
                  Entusiasta das melhores tecnologias de química avançada
                  <br /><br />
                  Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências
               </p>

               <footer>
                  <p>
                     Preço/hora
                     <strong>R$ 100,00</strong>
                  </p>
                  <button type="button">
                     <img src={whatsappIcon} alt="Whatsapp"/>
                     Entrar em contato
                  </button>
               </footer>
            </article>
    );
}

export default TeacherItem;
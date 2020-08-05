import React from 'react';
import PageHeader from '../../components/PageHeader';

import './styles.css';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';

import warningIcon from '../../assets/images/icons/warning.svg';
import Select from '../../components/Select';

function TeacherForm() {
   return (
      <div id="page-teacher-form" className="container">
         <PageHeader 
            title="Que incrível que você quer dar aulas" 
            description="O primeiro passo é preencher esse formulário de inscrição"
         />

         <main>
            <fieldset>
               <legend>Seus Dados</legend>

               <Input name="name" label="Nome completo" />
               <Input name="avatar" label="Avatar" />
               <Input name="whatsapp" label="Whatsapp" />
               <Textarea name="bio" label="Biografia"/>   
            </fieldset>

            <fieldset>
               <legend>Sobre a Aula</legend>

               <Select 
               name="subject" 
               label="Matéria" 
               options={[
                  { value: 'Artes', label: 'Artes' },
                  { value: 'Biologia', label: 'Biologia' },
                  { value: 'Ciências', label: 'Ciências' },
                  { value: 'Educação Fìsica', label: 'Educação Fìsica' },
                  { value: 'Física', label: 'Física' },
                  { value: 'Geografia', label: 'Geografia' },
                  { value: 'História', label: 'História' },
                  { value: 'Matemática', label: 'Matemática' },
                  { value: 'Português', label: 'Português' },
                  { value: 'Química', label: 'Química' },
               ]}
               />
               <Input name="cost" label="Csuto da sua hora por aula" />
            </fieldset>

            <footer>
               <p>
                  <img src={warningIcon} alt="Aviso importante"/>
                  Importante! <br />
                  Preencha todos os dados
               </p>
               <button type="button" >Salvar</button>
            </footer>
         </main>
      </div>
   );
}

export default TeacherForm;
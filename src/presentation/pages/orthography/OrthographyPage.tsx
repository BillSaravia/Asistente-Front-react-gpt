import { useState } from "react"
import { GptMessage, MyMessage, TextMessageBox, TextMessageBoxFile, TypingLoader } from "../../components"

interface Message {
    text: string;
    isGpt: boolean;
}


export const OrthographyPage = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  const handlePost = async (text:string) => {
  
    setIsLoading(true);
    setMessages( (prev) => [...prev, { text: text, isGpt: false}]);
    
    //TODO: UseCase

    setIsLoading(false);

    // todo: Añadir el mensaje de isGPT en true
  
  }


  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2">
          {/* Bienvenida */}
          
          <GptMessage text="Hola, puedes escribir tu texto en español, puedo corregir tu texto" />

          {
            messages.map((message, index) => (
              message.isGpt
                ?(
                  <GptMessage key={ index } text="Esto es de OpenAI" />

                )
                : (
                  <MyMessage key={ index } text={message.text} />
                )
            ))
          }

          {
            isLoading && (
              <div className="col-start-1 col-end-12 fade-in"> 
                <TypingLoader />
              </div>
            )
          }
          
      
        </div>
      </div>

     {/* <TextMessageBox 
      onSendMessage={ handlePost }
      placeholder='Escribe aqui lo que deseas'
      disableCorrections
     
     /> */}

    <TextMessageBoxFile 
      onSendMessage={ handlePost }
      placeholder='Escribe aqui lo que deseas'
      
     
     />

    </div>
  )
}

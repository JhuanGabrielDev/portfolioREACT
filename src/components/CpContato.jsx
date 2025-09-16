import React from "react";

// Chamada da Biblioteca Hook Form.
import { useForm } from "react-hook-form";

// Chamada da Bblioteca Yup.
import { yupResolver } from "@hookform/resolvers/yup";

// Chamada da validação de campos via JavaScript.
import { Validar } from '../js/validar-formulario';
import '../css/style.css';

// Chamada dos Assets do Contato.
import icon_contact_email from '../images/icones/iconsEmail.png';
import icon_contact_telefone from '../images/icones/iconsTelefone.png';
import icon_contact_whatsapp from '../images/icones/iconsWhatsapp.png';
import icon_contact_local from '../images/icones/iconsLocalizacao.png';

const CpContato = () => {

    // Estruturado os elementos do Formulário HTML - Váriáveis para campos Inputs
    const Input = ({ label, id, name, type, register, error }) => {
        return (
            <div className="form-group">
                <label>{label}</label>
                {error && <div className="error">{error.message}</div>}
                <input className="camp-form" id={id} name={name} type={type} placeholder="Digite os dados aqui..." {...register(name)} />
            </div>
        )
    }

    //    Estruturado os elementos do Formulário HTML - Textarea
    const Textarea = ({ label, id, name, register, error }) => {
        return (
            <div className="form-group">
                <label>{label}</label>
                {error && <div className="error">{error.message}</div>}
                <textarea className="camp-formMsg" id={id} name={name} placeholder="Digite os dados aqui..." {...register(name)}></textarea>
            </div>
        )
    }

    // Registro e verificação do Formulário, além de monitorar se o campo possui os dados ou não, caso sim, remove a mensagem 
    // se não carrega o errors
    // Realiza tambem o reset caso o botão seja clicado, lembrando que todos os recursos são construidas e executados
    // graças as bibliotecas Hook Form e Yup.

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(Validar)
    });

    // Monta o pacote de informações e testa o console.log.

    const onSubmit = data => {
        console.log(data);
    }

    return (
        <section className="contact" id="contact">
            <div className="wrap">
                <h1 className="title-contact">Contato!</h1>
                <div className="box-contact">
                    <div className="info-contact">
                        <p className="text1">
                            Tire as suas dúvidas sobre os nossos serviços ou realize um orçamento.
                        </p>
                        <p className="text2">
                            Esses são os nossos principais meios de contato:
                        </p>

                        <ul className="ul-contact">
                            <li className="list-ct">
                                <img src={icon_contact_email} alt="E-mail para contato" title="E-mail para contato" className="icon-ct" />
                                <span>contato@tecnologia.com.br</span>
                            </li>
                            <li className="list-ct">
                                <img src={icon_contact_telefone} alt="Telefone para Contato!" title="Telefone para Contato!" className="icon-ct" />
                                <span>(43) 9 9941-0097</span>
                            </li>
                            <li className="list-ct">
                                <img src={icon_contact_whatsapp} alt="Nos chame pelo WhatsApp" title="Nos chame pelo WhatsApp" className="icon-ct" />
                                <div className="boxwhatsapp">
                                    <span><a href="https://api.whatsapp.com/send?phone=5511999999999" target="_blank" className="link-wht-contato" rel="noopener noreferrer" title="localização..." >(00) 0 000-000</a></span>
                                    <span className="infowhatsapp">Clique no número!</span>
                                </div>
                            </li>
                            <li className="list-ct">
                                <img src={icon_contact_local} alt="Nossa Localização" title="Nossa Localização" className="icon-ct" />
                                <span>Avenida Teste, Nº100, CEP: 00000000 Londrina- PR</span>
                            </li>
                        </ul>

                    </div>
                    <div className="form-contact">
                        {/*  GET: Envia os dados para a URL da pagina de destino */}

                        {/* POST: Trafega os dados de forma oculta via requisição de protocolo http/https. */}

                        {/* onSubmit junto com handleSubmit pertence a Biblioteca Hook Form, selecione e monitora tudo que acontece no Formulário */}
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label className="label-contato">Digite seu Nome:</label>
                            <Input placeholder="Digite seu Nome aqui..." type="text" name="nome" id="nome" register={register} error={errors.nome} />

                            <label className="label-contato" >Digite seu E-mail:</label>
                            <Input placeholder="Digite seu E-mail aqui..." type="text" name="email" id="email" register={register} error={errors.email} />

                            <label className="label-contato" >Digite seu Assunto:</label>
                            <Input placeholder="Digite seu Assunto aqui..." type="text" name="ass" id="ass" register={register} error={errors.ass} />

                            <label className="label-contato" >Digite sua Mensagem:</label>
                            <Textarea placeholder="Digite sua Mensagem aqui..." name="msg" id="msg" register={register} error={errors.msg}></Textarea>

                            <div className="align-btn">
                                <button type="reset" className="btn-enviar" name="btnEnviar">ENVIAR</button>
                                <button type="submit" className="btn-reset" name="btnResetar" onClick={() => reset()}>RESET</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="google-maps">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.8972125320815!2d-51.17892302551911!3d-23.319487878966726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eb4313ff0ee975%3A0x1c33d6cf3ae5b478!2sWMBarros%20Treinamento%20em%20TI%20Cursos%20de%20Programa%C3%A7%C3%A3o%2C%20Front-end%2C%20Cria%C3%A7%C3%B5es%20de%20Sites%3A%20TUDO%20NA%20PR%C3%81TICA%20-%20PRESENCIAL%20E%20REMOTO!5e0!3m2!1spt-BR!2sbr!4v1754354465312!5m2!1spt-BR!2sbr" allowFullScreen={true} loading="lazy" width="600" height="450"></iframe>
            </div>
        </section>
    )
}


export default CpContato;
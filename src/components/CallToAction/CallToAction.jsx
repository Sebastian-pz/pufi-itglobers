import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './CallToAction.css';

function CallToAction() {
  const [state, handleSubmit] = useForm('xbjeagdz');
  if (state.succeeded) {
    return (
      <div className="callToAction">
        <p className="collage__p">NEWSLETTER</p>
        <h3 className="callToAction__title">SUSCRÍBETE</h3>
        <p className="callToAction__paragrahp">
          Y enterate de todas las novedades
        </p>
        <p className="callToAction__response --success">Thanks for joining!</p>
      </div>
    );
  }
  return (
    <div className="callToAction">
      <p className="collage__p">NEWSLETTER</p>
      <h3 className="callToAction__title">SUSCRÍBETE</h3>
      <p className="callToAction__paragrahp">
        Y enterate de todas las novedades
      </p>
      <form onSubmit={handleSubmit} className="callToAction__form">
        <input
          id="email"
          type="email"
          name="email"
          className="callToAction__input"
          placeholder="Ingresa tu email"
        />
        <button
          type="submit"
          className="callToAction__button"
          disabled={state.submitting}
        >
          →
        </button>
      </form>
      {/*
        En este caso formspree trae su propio validador

        Si lo tuviera que hacer yo mismo utilizaria un estado vinculado al input
        Y justo donde está el validador de error renderizaria un error dependiendo de una función regex para email
      */}
      <ValidationError
        className="callToAction__response --error"
        prefix="Email"
        field="email"
        errors={state.errors}
      />
    </div>
  );
}

export default CallToAction;

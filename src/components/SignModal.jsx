import React from "react";
import "../styles/SignModal.css";

const SignModal = ({ type, onClose }) => (
  <div className="modal__backdrop" onClick={onClose}>
    <div className="modal" onClick={e => e.stopPropagation()}>
      <button className="modal__close" onClick={onClose}>×</button>
      <h2>{type === 'signin' ? 'Sign In' : 'Sign Up'}</h2>
      <form>
        {type === 'signup' && (
          <input type="text" placeholder="Full Name" required />
        )}
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">
          {type === 'signin' ? 'Sign In' : 'Create Account'}
        </button>
      </form>
    </div>
  </div>
);

export default SignModal;

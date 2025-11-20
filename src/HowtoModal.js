import React from 'react'
import ReactDOM from 'react-dom'
import './HowtoModal.css'

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1000
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 1000
}

export default function HowtoModal({open, onClose}) {

    function handleMouseOver(event) {
        event.target.style.color='#E5E7EB'
    }

    function handleMouseOut (event) {
        event.target.style.color='#9CA3AF'
    }

    function handleHowtoOver(event) {
        event.target.style.transform='translateY(-2px)'
        event.target.style.boxShadow='0 6px 20px rgba(59, 130, 246, 0.4)'
    }

    function handleHowtoOut(event) {
        event.target.style.transform='translateY(0)'
        event.target.style.boxShadow='0 4px 12px rgba(59, 130, 246, 0.3)'
    }
    
    if (!open) return null

  return ReactDOM.createPortal(
    <div>
        <div style={OVERLAY_STYLES} />
        <div className='modalflex' style={MODAL_STYLES}>
            <h1 className='text'>How To Play Guess The City</h1>
            <button className='close' onClick={onClose} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>x</button>
            <div className='text'>Start by entering any city. Its color will determine how close it is to a random target city.</div>
            {/* <h2 className='text'>Guess Colors:</h2> */}
            <div className='text'>If the city is in <b style={{color: '#000000'}}>black</b>, that means it's your first guess.</div>
            <div className='text example'><b style={{color: '#000000'}}>1. New York, US</b></div>
            <div className='text'>If the city is in <b style={{color: '#F59E0B'}}>gold</b>, that means it's your closest guess so far. (Easy and Medium modes only)</div>
            <div className='text example' style={{color: '#F59E0B'}}><b>2. St. Louis, US</b></div>
            <div className='text'>If the city is in <b style={{color: '#EF4444'}}>red</b>, that means it's further from the target city than your previous guess.</div>
            <div className='text example' style={{color: '#EF4444'}}><b>3. Miami, US</b></div>
            <div className='text'>If the city is in <b style={{color: '#10B981'}}>green</b>, that means it's closer to the target city than your previous guess.</div>
            <div className='text example' style={{color: '#10B981'}}><b>4. Atlanta, US</b></div>
            <div className='text'>If the city is in <b style={{color: '#3B82F6'}}>blue</b>, that means you guessed the right city.</div>
            <div className='text example' style={{color: '#3B82F6'}}><b>5. Kansas City, US</b></div>
            <h2 className='text'>Game Modes:</h2>
            <div className='text'><b>Easy:</b> The distance in kilometers to the target city will be shown and the closest guess will be marked in <b style={{color: '#F59E0B'}}>gold</b>.</div>
            <div className='text'><b>Medium:</b> The closest guess will be marked in <b style={{color: '#F59E0B'}}>gold</b>.</div>
            <div className='text'><b>Hard:</b> You get no additional help.</div>
            <button onClick={onClose} className='understand' onMouseOver={handleHowtoOver} onMouseOut={handleHowtoOut}>I Understand</button>
        </div>
    </div>,
    document.getElementById('portal')
  )
}
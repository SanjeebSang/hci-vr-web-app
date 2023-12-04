import './unity-button.css'


export default function UnityButton(props) {

    return (<button onClick={props.onClick} class="button-30" role="button">{props.children}</button>);
}
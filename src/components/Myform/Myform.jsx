
import React, {
    useState
} from 'react';

const Myform = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <form noValidate validated={validated} onSubmit={handleSubmit} className="row">
            <h2>Your name</h2>
            <input
                required
                type="text"
                placeholder="First name"
                value="Luiza"
            />
            <p>Looks good!</p>
            <div>
                <input
                    required
                    label="Agree to terms and conditions"
                    feedback="You must agree before submitting."
                />
            </div>
            <button type="submit">Submit form</button>
        </form>
    );
}

export default Myform;

class FormHelper {
    constructor(name, component, initialFormData) {
        this.name = name;
        this.component = component;
        this.initialFormData = initialFormData;
    }

    componentDidMount(callback) {
        this.component.setState( {
            [this.name]: this.initialFormData
        }, () => {
            if (callback && callback != null) callback();
        })
    }

    handleChange(e, callback) {
        const fieldName = e.target.name;
        const value = (e.target.type === 'checkbox') ? e.target.checked : (e.target.value != null) ? e.target.value.trim() : null;

        const newFormData = Object.assign({}, this.component.state[this.name], {[fieldName]: value})
        this.component.setState({[this.name]: newFormData}, () => {
            console.log(JSON.stringify(this.component.state[this.name], null, 2));
            if (callback && callback != null) callback();
        });
    }

    getValue(fieldName) {
        return (this.component.state[this.name]) ? this.component.state[this.name][fieldName] : null;
    }

    getFormData() {
        return this.component.state[this.name];
    }
}

export default FormHelper;
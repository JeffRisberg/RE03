/**
 * Form processor support, wrap each component with this.
 *
 * @author various
 * @since May 2016
 */
class FormHelper {

    constructor(name, component, initialFormData) {
        this.name = name;
        this.component = component;
        this.initialFormData = initialFormData;
    }

    componentDidMount(callback) {
        this.component.setState( {
            formData: this.initialFormData
        }, () => {
            if (callback && callback != null) callback();
        })
    }

    handleChange(e, callback) {
        const fieldName = e.target.name;
        const value = (e.target.type === 'checkbox') ? e.target.checked : (e.target.value != null) ? e.target.value.trim() : null;

        console.log("changing " + fieldName + " to " + value);

        const newFormData = Object.assign({}, this.component.state.formData, {[fieldName]: value})
        this.component.setState({formData: newFormData}, () => {
            console.log(JSON.stringify(this.component.state.formData, null, 2));
            if (callback && callback != null) callback();
        });
    }

    getValue(fieldName) {
        return this.component.state.formData[fieldName];
    }

    getFormData() {
        return this.component.state.formData;
    }
}

export default FormHelper;

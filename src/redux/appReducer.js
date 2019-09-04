import actions from './appActions'

const {
    load_the_application,
    mounted_the_component
} = actions


const initialState = {
    name: 'Test',
    subText: 'Another',
    information: ''
};

export default function appReducer(state = initialState, payload) {

    switch (payload.type) {
        case load_the_application:
            return {
                ...state,
                name: "My React Application"
            }

            break;
        case mounted_the_component:
            return {
                ...state,
                information:"Loaded the component"
            }
            break;

        default:
            return state;
            break;
    }
};
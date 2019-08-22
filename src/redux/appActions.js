const actions = {
    load_the_application : "load_the_application",
    mounted_the_component : "mounted_the_component",

    load:()=> ({
        type: actions.load_the_application
    }),
    
    mountComponent:()=> ({
        type: actions.mounted_the_component
    }),

}

export default actions;
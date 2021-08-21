import Square from '../../components/Square/index.vue'

export default {
    title: 'My-Components-For-Testing/Square',
    component: Square,
    argTypes: {
        background: { control: 'color' },
        left: { control: 'number' },
        size: {
            options: ['100px', '200px'],
            control: 'select'
        },
        rotation: {
            control: { type: 'range', min: 0, max: 360, step: 0.05 }
        },

        // for testing purposes
        many: {
            options: [
                "0-f","1-f","2-f","3-f","4-f",
                "5-f","6-f","7-f","8-f","9-f",
                "10-f","11-f","12-f","13-f"
            ],
            control: 'multi-select'
        },
        time: { control: 'date' },
        message: { control: 'text' },
        file: { control: 'file' },
    },
};

const Template = (args) => ({
    components: { Square },
    setup: () => ({ args }),
    template: '<square v-bind="args"/>',
});

export const Primary = Template.bind({});

Primary.args = {
    background: 'blue',
    left: 10,
};
import { MyLabel } from '../../components/MyLabel';
import { ComponentMeta, ComponentStory } from '@storybook/react';


export default{
    title:'UI/MyLabel',
    component: MyLabel,
    argTypes:{
        fontColor:{control:'color'}
    }

} as ComponentMeta<typeof MyLabel>


const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />


export const Basic = Template.bind({}) ;
Basic.args={
    size:'normal',
    allCarps:false,
}

export const AllCarps = Template.bind({}); 
AllCarps.args={
    size:'normal',
    allCarps:true,
    color:'primary'
}

export const Secondary = Template.bind({}); 
Secondary.args={
    size:'normal',
    color:'secondary',
}

export const Terciary = Template.bind({});
Terciary.args={
    size:'normal',
    color:'tertiary',
}
export const CustomFontColor = Template.bind({});
CustomFontColor.args={
    size:'h1',
    fontColor:"#878000"
    
}
export const CustomBackgroundColor = Template.bind({});
CustomBackgroundColor.args={
    size:'h1',
    fontColor:"#878000",
    backgroundColor:'black'
    
}
// components/atoms/Button/Button.stories.js

import Button from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
};

export const Primary = () => { const testClick = () => { alert('Primary'); }; return <Button text="Primary Button" onClick={testClick } />; };
export const Secondary = () => { const testClick = () => { alert('Secondary'); }; return <Button text="Secondary Button" onClick={testClick } />; };

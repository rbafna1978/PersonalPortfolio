const rootElement = document.createElement('div');
rootElement.id = 'home-button-root';
document.body.appendChild(rootElement);

const HomeButton = () =>
  React.createElement('a', { href: 'index.html', className: 'home-button' }, 'Home');

const root = ReactDOM.createRoot(rootElement);
root.render(React.createElement(HomeButton));

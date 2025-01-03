import { FloatingDock } from '@/components/ui/floating-dock';

function A() {
  return <h1>AA</h1>
}
function B() {
  return <h1>BB</h1>
}
function C() {
  return <h1>CC</h1>
}
export default function Home() {
  const items = [
    { title: 'a', icon: <A />, href: '' },
    { title: 'b', icon: <B />, href: '' },
    { title: 'c', icon: <C />, href: '' },
  ];
  return (
    <div style={{margin:'10em'}}>
    <FloatingDock items={items} />
    </div>
  );
}

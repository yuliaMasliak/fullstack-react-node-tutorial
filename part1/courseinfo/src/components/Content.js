import Part from './Part';

export default function Content({ parts }) {
  console.log(parts);
  return (
    <div>
      <Part data={parts[0]} />
      <Part data={parts[1]} />
      <Part data={parts[2]} />
    </div>
  );
}

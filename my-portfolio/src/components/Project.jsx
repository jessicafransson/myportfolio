function Project({ name, content, emoji }) {
  return (
    <li>
      {emoji} {name} {content}
    </li>
  );
}

export default Project;

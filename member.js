function skillMembers() {
  return this.members.map(member => {
    return `${member.name} - ${member.age}`;
  });
}
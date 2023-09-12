export const getInitial = (name: string) => {
  const splittedName: string[] = name.split(' ')
  const firstInitial: string = splittedName[0].charAt(0)

  if (splittedName[1]) {
    const secondInitial: string = splittedName[1].charAt(0)

    return firstInitial + secondInitial
  }

  return firstInitial
}

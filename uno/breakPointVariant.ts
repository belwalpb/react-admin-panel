const desktopBreakPoint = "750px";

export default (matcher: string) => {
  let match: string = "";

  if (matcher.startsWith("desk:")) {
    match = matcher.replace("desk:", "");
    return {
      matcher: match,
      parent: [`@media (min-width: ${desktopBreakPoint}) `],
    };
  }

  if (matcher.startsWith("mob:")) {
    match = matcher.replace("mob:", "");
    return {
      matcher: match,
      parent: [`@media (max-width: ${desktopBreakPoint}) `],
    };
  }

  return {
    matcher: matcher,
  };
};

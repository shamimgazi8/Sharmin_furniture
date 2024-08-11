//remove tags
export const remove_tags = (_html: any) => {
  let html = _html?.toString();
  let strippedString = html?.replace(/(<([^>]+)>)/gi, '');
  return strippedString;
};
//printe excerpt
export const excerpt = (_html: any, count = 100) => {
  const text = remove_tags(_html)
    ?.toString()
    .replaceAll('&nbsp;', ' ')
    .replaceAll(/"/g, '');
  return text?.slice(0, count) + (text?.length > count ? '...' : '');
};

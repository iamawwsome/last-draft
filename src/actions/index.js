import icons from '../components/Buttons/'

export default [
  {type: 'inline', label: 'B', style: 'BOLD', icon: icons.BoldIcon},
  {type: 'inline', label: 'I', style: 'ITALIC', icon: icons.ItalicIcon},
  {type: 'entity', label: 'Link', style: 'link', entity: 'LINK', icon: icons.LinkIcon},
  {type: 'separator'},
  {type: 'block', label: 'UL', style: 'unordered-list-item', icon: icons.ULIcon},
  {type: 'block', label: 'OL', style: 'ordered-list-item', icon: icons.OLIcon},
  {type: 'block', label: 'H2', style: 'header-two', icon: icons.H2Icon},
  {type: 'block', label: 'QT', style: 'blockquote', icon: icons.BlockQuoteIcon},
  {type: 'block', label: 'PQ', style: 'pullquote', icon: icons.PullQuoteIcon},
  {type: 'block', label: 'AL', style: 'alignment-left', icon: icons.AlignLeft},
  {type: 'block', label: 'AC', style: 'alignment-center', icon: icons.AlignCenter},
  {type: 'block', label: 'AR', style: 'alignment-right', icon: icons.AlignRight}
]

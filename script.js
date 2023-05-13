// 使用 Clipboard API 实现点击复制文本内容
const textBlocks = document.querySelectorAll('.bg-gray-500');
textBlocks.forEach((block) => {
  block.addEventListener('click', () => {
    const textToCopy = block.textContent.trim() + 'vme50 dad!https://www.vme50.dad';
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        alert('文本已复制到剪贴板！');
      })
      .catch((error) => {
        console.error('复制文本时出错：', error);
      });
  });
});

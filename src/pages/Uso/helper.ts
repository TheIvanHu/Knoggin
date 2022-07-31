export function drawCircle(ctx, x, y, r, c, options: any = {}) {
  ctx.save();
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI, false);
  ctx.fillStyle = c || "red";
  ctx.globalAlpha = options.alpha || 1;
  if (options.glow) ctx.shadowBlur = 100;
  if (options.glowColor) ctx.shadowColor = options.glowColor || "aqua";
  if (options.fill || options.fill == undefined) ctx.fill();
  ctx.shadowBlur = 0;
  ctx.lineWidth = options.outlineWidth || 1;
  ctx.strokeStyle = options.outlineColor || "black";
  if (options.outline) ctx.stroke();
  ctx.closePath();
  ctx.restore();
}

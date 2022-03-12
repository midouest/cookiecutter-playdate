import "CoreLibs/object"
import "CoreLibs/graphics"
import "CoreLibs/sprites"
import "CoreLibs/timer"

local pd<const> = playdate
local gfx<const> = pd.graphics

function setupGame()
    font = gfx.getFont()
    greeting = "Hello, {{cookiecutter.name}}!"
    local w<const> = font:getTextWidth(greeting)
    local h<const> = font:getHeight()
    local x<const> = (400 - w) / 2
    local y<const> = (240 - h) / 2
    gfx.drawText(greeting, x, y)
end

setupGame()

function pd.update()
    gfx.sprite.update()
    pd.timer.updateTimers()
    pd.drawFPS(0, 0)
end

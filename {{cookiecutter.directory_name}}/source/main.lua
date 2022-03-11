import "CoreLibs/object"
import "CoreLibs/graphics"
import "CoreLibs/sprites"
import "CoreLibs/timer"

local pd<const> = playdate
local gfx<const> = pd.graphics

function setupGame()
    font = gfx.getFont()
    greeting = "Hello, {{cookiecutter.name}}!"
end

setupGame()

function pd.update()
    local w = font:getTextWidth(greeting)
    local h = font:getHeight()
    gfx.drawText(greeting, (400 - w) / 2, (240 - h) / 2)

    gfx.sprite.update()
    pd.timer.updateTimers()
    pd.drawFPS(0, 0)
end

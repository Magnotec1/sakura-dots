killall -q polybar
if type "xrandr"; then
  for m in $(xrandr --query | grep " connected" | cut -d" " -f1); do
    MONITOR=$m polybar --reload main &
    MONITOR=$m polybar --reload box1 &
    MONITOR=$m polybar --reload box2 &
    MONITOR=$m polybar --reload box3 &
    MONITOR=$m polybar --reload box4 &
    MONITOR=$m polybar --reload box5 &
  done
else
  polybar --reload main &
  polybar --reload box1 &
  polybar --reload box2 &
  polybar --reload box3 &
  polybar --reload box4 &
  polybar --reload box5 &
fi

echo "Bars launched..."
sleep 0.4
polybar-msg cmd hide
pkill player-mpris-tail.py
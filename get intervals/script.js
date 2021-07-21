// Даны два отсортированных списка с интервалами присутствия 
// пользователей в онлайне. Начало интервала строго меньше конца. 
// Нужно вычислить интервалы, когда оба пользователя были в онлайне.
function getIntervals(user1, user2) {
    let intersectionIntervals = [];
    for (let i = 0; i < user1.length; i++) {
        let interval1 = user1[i],
            interval2 = user2[0],
            intersection = [];

        if (interval1[0] >= interval2[0] && interval1[0] <= interval2[1]) {
            intersection.push(interval1[0]); // we found the start
            intersection.push(Math.min(interval1[1], interval2[1])); // found the end
            if (interval1[1] > interval2[1]) {
                user2.shift();
            }
            i--;
        }

        else if (interval1[0] < interval2[0]) {
            if (interval1[1] <= interval2[0]) {
                continue;
            }
            else if (interval1[1] > interval2[0] && interval1[1] < interval2[1]) {
                intersection.push(interval2[0], interval1[1]);
            }
            else if (interval1[1] >= interval2[1]) {
                intersection.push(interval2[0], interval2[1]);
                user2.shift();
                i--;
            }
        }

        else if (interval1[0] > interval2[1]) {
            user2.shift();
            i--;
        }

        intersectionIntervals.push(intersection);
    }
    return intersectionIntervals;
}


let user1 = [[8, 12], [17, 22]];
let user2 = [[5, 11], [14, 18], [20, 23], [42, 55]];
console.log(getIntervals(user1, user2));
// => [(8, 11), (17, 18), (20, 22)]

user1 = [[9, 15], [18, 21]];
user2 = [[10, 14], [21, 22]];
console.log(getIntervals(user1, user2));
// => [(10, 14)]
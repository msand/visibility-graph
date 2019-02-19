import test from 'ava'
import { Edge } from '../src/Edge'
import { Point } from '../src/Point'
import { edgeIntersect, pointEdgeDistance, intersectPoint } from '../src/utils'

test('edgeIntersect test', t => {
  var p1 = new Point([0, 0], -1)
  var p2 = new Point([0, 1], -1)
  var p3 = new Point([0, 2], -1)
  var p4 = new Point([2, 2], -1)

  var e1 = new Edge(p1, p2)

  t.is(edgeIntersect(p1, p2, e1), true)
  t.is(edgeIntersect(p2, p1, e1), true)
  t.is(edgeIntersect(p3, p4, e1), false)
})

test('pointEdgeDistance test', t => {
  var p1 = new Point([3, 1])
  var p2 = new Point([3, 5])
  var p3 = new Point([2, 2])
  var p4 = new Point([4, 4])
  var p5 = new Point([1, 1])
  var p6 = new Point([1, 2])
  var p7 = new Point([3, 4])
  var p8 = new Point([2, 5])

  var e1 = new Edge(p1, p2)
  var e2 = new Edge(p3, p4)
  var e3 = new Edge(p5, p2)

  t.deepEqual(intersectPoint(p3, p4, e1), new Point([3, 3]))
  t.deepEqual(intersectPoint(p3, p4, e1), new Point([3, 3]))

  t.is(pointEdgeDistance(p3, p4, e1), 1.4142135623730951)
  t.is(pointEdgeDistance(p1, p2, e2), 2)
  t.is(pointEdgeDistance(p6, p7, e3), 1.4142135623730951)
  t.is(pointEdgeDistance(p8, p7, e3), 0.9428090415820635)

})
